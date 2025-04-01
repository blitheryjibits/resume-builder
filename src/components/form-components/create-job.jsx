export default function createJob(job = {}) {
    const newJob = {
        "Job-Title": job["Job-Title"] ?? "",
        "Start-Date": job["Start-Date"] ?? "",
        "End-Date": job["End-Date"] ?? "",
        "Company-Name": job["Company-Name"] ?? "",
        "Responsibilities": job["Responsibilities"] ?? "",
        id: job.id ?? 0,
    }
    return newJob;
}