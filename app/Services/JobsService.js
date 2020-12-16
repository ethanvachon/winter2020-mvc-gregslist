import {ProxyState} from "../AppState.js"
import {Job} from "../Models/models.js"


class JobService {
  deleteHouse(id){
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }

  createJob(newJob){
    let job = new Job(newJob)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }
}

export const jobService = new JobService()
