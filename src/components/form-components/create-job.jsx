export default function createJob(job = {}) {
    const newJob = {
        companyName: job.companyName ?? "",
        jobTitle: job.jobTitle ?? "",
        startDate: job.startDate ?? "",
        endDate: job.endDate ?? "",
        id: job.id ?? "",
    }
    return newJob;
}