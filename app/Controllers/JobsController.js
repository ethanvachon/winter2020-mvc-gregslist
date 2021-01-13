import { ProxyState } from "../AppState.js"
import { jobService } from "../Services/JobsService.js"

function _drawJobs() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs)
    this.getJobs()
    _drawJobs()
  }
  getJobs() {
    try {
      jobService.getJobs()
    } catch (error) {
      console.error(error)
    }
  }
  deleteJob(id) {
    try {
      jobService.deleteJob(id)
    } catch (error) {
      console.error(error)
    }
  }


  createJob() {
    window.event.preventDefault()
    let form = window.event.target
    let newJob = {
      company: form['company'].value,
      jobTitle: form['jobTitle'].value,
      hours: form['hours'].value,
      rate: form['rate'].value,
      description: form['description'].value,
    }
    try {
      jobService.createJob(newJob)
    } catch (error) {
      console.error(error)
    }
    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-job-modal").modal('hide');
  }
}