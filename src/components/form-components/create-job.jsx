export default function createJob(job = {}) {
    const newJob = {
        "Job-Title": job["Job-Title"] ?? "",
        "Company-Name": job["Company-Name"] ?? "",
        "Start-Date": job["Start-Date"] ?? "",
        "End-Date": job["End-Date"] ?? "",
        "Responsibilities": job["Responsibilities"] ?? "",
        id: job.id ?? 0,
    }
    return newJob;
}