export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string[]
}

export const experienceList: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Teez",
    period: "01.2025 – 06.2025",
    description: [
      "automated internal processes (jira)",
      "wrote script that parsed 7.8bln data",
      "integrated ai for data analysis"
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "nFactorial Incubator",
    period: "06.2024 - 08.2024",
    description: [
      "worked on instagram parser",
      "integrated ai for stories summarization",
      "developed orchestration service in go"
    ]
  }
]

export default function Experience() {
  return (
    <div className="flex flex-col space-y-6 mx-auto w-full max-w-2xl px-4 sm:px-0">
      {experienceList.map((exp, i) => (
        <div key={i} className="border-b border-neutral-200 pb-6">
          <h2 className="text-lg sm:text-lg font-semibold">{exp.role}</h2>
          <p className="text-sm sm:text-sm text-neutral-600 mt-1">
            {exp.company} • {exp.period}
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm sm:text-sm text-neutral-500">
            {exp.description.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
