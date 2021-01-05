import {ProxyState} from "../AppState.js"
import {Job} from "../Models/models.js"
import { api } from "./AxiosService.js"


class JobService {
  async getJobs() {
    let res = await api.get("jobs")
    ProxyState.jobs = res.data.map(i => new Job(i))
  }
  async deleteJob(id){
    let job = await api.delete("jobs/"+id)
    this.getJobs()
  }

  async createJob(newJob){
    let job = await api.post("jobs", newJob)
    this.getJobs()
  }
}

export const jobService = new JobService()
