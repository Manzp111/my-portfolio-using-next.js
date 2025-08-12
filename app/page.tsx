import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900 dark:text-white">Gilbert</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/mypicture.png"
              alt="Gilbert - Software Engineer"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Gilbert</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Software Engineer specializing in Django & Node.js
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Django Expert
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Node.js Developer
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                Full-Stack
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate software engineer with expertise in building scalable web applications using Django and
                Node.js. With a strong foundation in both backend and frontend technologies, I create robust solutions
                that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                My journey in software development has led me to work on diverse projects, from RESTful APIs and
                microservices to full-stack web applications. I'm always eager to learn new technologies and tackle
                challenging problems.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/software-engineer-coding.png" alt="Gilbert working on code" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">Python</Badge>
                  <Badge className="mr-2 mb-2">JavaScript</Badge>
                  <Badge className="mr-2 mb-2">Django</Badge>          
                  <Badge className="mr-2 mb-2">Node.js</Badge>
               
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Database & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">PostgreSQL</Badge>
                  <Badge className="mr-2 mb-2">MongoDB</Badge>
                  <Badge className="mr-2 mb-2">Docker</Badge>
                  <Badge className="mr-2 mb-2">Git</Badge>

                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Frontend & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">React</Badge>
                  <Badge className="mr-2 mb-2">Next.js</Badge>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/ecommerce-dashboard.png"
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">E-commerce Platform</CardTitle>
                <CardDescription className="mb-4">
                  Full-stack e-commerce solution built with Django and React. Features include user authentication,
                  payment processing, and admin dashboard.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/task-management-app.png"
                  alt="Task Management API"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Task Management API</CardTitle>
                <CardDescription className="mb-4">
                  RESTful API built with Node.js and Express for managing tasks and projects. Includes real-time updates
                  and team collaboration features.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    API Docs
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src="/social-media-analytics-dashboard.png"
                  alt="Social Media Analytics"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">Social Media Analytics</CardTitle>
                <CardDescription className="mb-4">
                  Analytics dashboard for social media metrics built with Django and Chart.js. Features data
                  visualization and automated reporting.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">Chart.js</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">Let's Work Together</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you need a Django backend, Node.js
            API, or full-stack solution, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              gilbertnshimyimana11@gmail.com
            </Button>
            <Bu variant="outline" size="lg">
              <Linkedin className="w-4 h-4 mr-2" />
             <a href="https://www.linkedin.com/in/gilbert-nshimyimana-132b68376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"></a>
            </Button>
            <a href="https://github.com/Manzp111" variant="outline" size="lg">
              <Github className="w-4 h-4 mr-2" />
             
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Gilbert. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
