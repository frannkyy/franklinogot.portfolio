import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Franklin Ogot | Portfolio</title>
      </Head>
      <Navbar />
      <main className="bg-gray-50 text-gray-800">
        <section className="text-center py-20 bg-white shadow">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Franklin Ogot</h1>
          <p className="text-xl text-gray-600">Developer | Designer | Creator</p>
        </section>

        <section id="about" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            I’m Franklin Ogot, a full-stack developer with a strong eye for design and usability.
            I specialize in creating responsive, fast, and engaging web applications.
          </p>
        </section>

        <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold">Project One</h3>
              <p className="text-gray-600">An amazing project that solves real-world problems.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold">Project Two</h3>
              <p className="text-gray-600">Another innovative project with beautiful UI/UX.</p>
            </div>
          </div>
        </section>

        <section id="blog" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold mb-6">Blog</h2>
          <article className="mb-6">
            <h3 className="text-2xl font-bold">How I Built My Portfolio</h3>
            <p className="text-gray-600">Sharing the process of building and deploying my portfolio website.</p>
          </article>
          <article className="mb-6">
            <h3 className="text-2xl font-bold">Top 5 Tools I Use Every Day</h3>
            <p className="text-gray-600">A quick rundown of my favorite productivity and development tools.</p>
          </article>
        </section>

        <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
            <textarea placeholder="Message" className="w-full p-3 border rounded"></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
