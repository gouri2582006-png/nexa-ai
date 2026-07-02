import { useState } from "react";
import { askAI } from "../services/gemini";
import * as pdfjsLib from "pdfjs-dist";

import * as pdfjs from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function extractPDFText(file) {
    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
      data: arrayBuffer,
    }).promise;

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);

      const content = await page.getTextContent();

      text += content.items
        .map((item) => item.str)
        .join(" ");

      text += "\n";
    }

    return text;
  }

  async function analyzeResume() {
    if (!file) return;

    setLoading(true);

    try {
      const resumeText = await extractPDFText(file);

      const prompt = `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Return ONLY in this format:

ATS Score:
/100

Strengths:
- ...

Weaknesses:
- ...

Missing Skills:
- ...

Suggestions:
- ...

Resume:

${resumeText}
`;

      const response = await askAI(prompt, {});
      setResult(response);
    } catch (err) {
      setResult("Error reading resume.");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div className="bg-zinc-900 p-6 rounded-3xl">

      <h2 className="text-2xl font-bold mb-6">
        📄 Resume Analyzer
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-6"
      />

      {file && (
        <div className="bg-zinc-800 p-5 rounded-2xl">

          <p className="font-semibold">
            Selected Resume
          </p>

          <p className="text-zinc-400 mb-5">
            {file.name}
          </p>

          <button
            onClick={analyzeResume}
            className="bg-blue-600 px-6 py-3 rounded-xl"
          >
            Analyze Resume
          </button>
                    {loading && (
            <p className="mt-4 text-blue-400 animate-pulse">
              🤖 AI is analyzing your resume...
            </p>
          )}

          {result && (
            <div className="mt-6 bg-zinc-900 p-5 rounded-xl whitespace-pre-wrap border border-zinc-700">
              <h3 className="text-xl font-bold mb-4">
                AI Resume Analysis
              </h3>

              {result}
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default ResumeAnalyzer;