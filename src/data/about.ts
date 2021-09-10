import { AboutModel } from '../models'

// All the properties are optional - can be left empty or deleted
export const aboutData: AboutModel = {
  name: 'John Doe',
  role: 'Full-Stack Developer',
  description: `I love what I do`,
  resume: 'http://localhost',
  social: {
    linkedin: 'http://linkedin.com',
    github: 'http://github.com',
  },
}
