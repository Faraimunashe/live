<template>
  <div class="font-sans bg-gray-900 text-gray-100 selection:bg-primary/50">
    <!-- Navbar -->
    <header class="fixed top-0 w-full z-50 bg-gray-800/80 backdrop-blur shadow-lg">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 class="text-2xl font-extrabold text-primary tracking-wider">Faraimunashe</h1>

        <nav class="flex flex-wrap items-center gap-6 font-semibold text-gray-100">
          <a
            v-for="link in ['About', 'Tech', 'Experience', 'Education', 'Projects', 'Contact']"
            :key="link"
            :href="'#' + link.toLowerCase()"
            class="relative group transition duration-300 ease-in-out hover:scale-105"
          >
            <span class="relative z-10">{{ link }}</span>
            <span
              class="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-in-out group-hover:w-full"
            ></span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              {{ link }}
            </span>
          </a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-10 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      <div class="flex-1 md:w-1/2 text-center md:text-left space-y-4">
        <h2 ref="heroTitle" class="text-5xl md:text-6xl font-extrabold leading-tight">Kwaziwai, I'm Faraimunashe</h2>
        <p ref="heroSubtitle" class="text-lg md:text-xl font-light">Software Developer crafting beautiful & intuitive desktop, web & mobile application experiences.</p>
        <a
          href="/assets/Faraimunashe_Resume.pdf"
          target="_blank"
          class="inline-flex items-center bg-gradient-to-r from-primary to-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transform transition shadow-lg"
        >
          <i class="fas fa-download mr-2"></i> Download Resume
        </a>
      </div>

      <div ref="globeContainer" class="flex-1 md:w-[60%] w-full h-64 md:h-[450px]"></div>
    </section>

    <!-- Tech Stack -->
    <section id="tech" class="py-24 bg-gray-900">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4 text-primary">Tech Stack</h2>
        <p class="text-gray-400 mb-8">Technologies I use and love:</p>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="flex items-center space-x-2 bg-gray-800 shadow rounded px-4 py-2 transition hover:shadow-xl hover:scale-105"
          >
            <i :class="tech.icon"></i>
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="py-24 relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      <div class="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-700 opacity-10 blur-2xl rounded-full"></div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h2 class="text-4xl font-bold mb-4 text-primary">Experience</h2>
        <p class="text-gray-300 mb-12">Here’s a brief timeline of my professional journey:</p>

        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="flex md:contents group hover:scale-[1.02] transition-transform"
          >
            <div class="col-start-1 col-end-3 mr-4 md:mx-auto relative">
              <div class="h-full w-1 bg-gradient-to-b from-primary to-blue-400"></div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-br from-primary to-blue-400 shadow-lg ring-4 ring-gray-900 animate-pulse"></div>
            </div>

            <div class="bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-md col-start-3 col-end-10 p-6 rounded-xl my-4 shadow-lg border border-primary/30 transition group-hover:shadow-xl">
              <h3 class="text-xl font-semibold text-primary mb-1">{{ exp.title }}</h3>
              <p class="text-sm text-gray-400 mb-1">{{ exp.company }} | {{ exp.year }}</p>
              <p class="text-gray-300 text-sm">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section id="education" class="py-24 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-hidden">
      <div class="absolute -top-10 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-3xl rounded-full -translate-x-1/2 animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-700 opacity-10 blur-2xl rounded-full"></div>

      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h2 class="text-4xl font-bold mb-6 text-primary">Education</h2>
        <div class="space-y-8">
          <div class="bg-gradient-to-br from-gray-700/40 to-gray-800/40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-primary/20 transition hover:scale-105 hover:shadow-xl">
            <h3 class="text-2xl font-semibold text-accent">Bachelor of Science in Computer Science</h3>
            <p class="text-gray-400">Midlands State University, 2018 - 2022</p>
            <p class="mt-2 text-gray-300 text-sm">Focused on software development, algorithms, and data structures. Participated in various tech clubs and hackathons.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-24 bg-gray-800 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 blur-3xl rounded-full animate-pulse"></div>

      <div class="max-w-6xl mx-auto text-center relative z-10">
        <h2 class="text-4xl font-bold mb-12 text-primary">Selected Projects</h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div
            v-for="project in projects"
            :key="project.id"
            class="group relative overflow-hidden rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            <img :src="project.image" alt="Project" class="w-full h-64 object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out" />
            <div class="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-center px-4 transform group-hover:-translate-y-2">
              <h3 class="text-2xl font-bold mb-2">{{ project.title }}</h3>
              <p class="text-sm">{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="inline-block mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                <i class="fas fa-external-link-alt mr-1"></i> View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GitHub Contributions -->
    <section class="py-24 bg-gray-900">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6 text-primary">My GitHub Contributions</h2>
        <p class="text-gray-400 mb-8">My coding activity & open-source spirit:</p>
        <div class="overflow-x-auto flex justify-center">
          <img :src="`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&date_format=M%20j%5B%2C%20Y%5D`" alt="GitHub Streak" class="rounded shadow-lg" />
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-24 bg-gray-800">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6 text-primary">Let’s Connect</h2>
        <p class="text-gray-300 mb-8">Have an idea or project? Let’s collaborate!</p>
        <form class="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" class="w-full border-b border-gray-600 focus:outline-none focus:border-primary px-4 py-2 bg-transparent placeholder-gray-400 transition" />
          <input type="email" placeholder="Email" class="w-full border-b border-gray-600 focus:outline-none focus:border-primary px-4 py-2 bg-transparent placeholder-gray-400 transition" />
          <textarea placeholder="Message" class="w-full border-b border-gray-600 focus:outline-none focus:border-primary px-4 py-2 bg-transparent placeholder-gray-400 transition"></textarea>
          <button type="submit" class="bg-primary text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition">
            <i class="fas fa-paper-plane mr-2"></i> Send
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-400 text-center py-6">
      <p>© 2025 Faraimunashe. Built with ❤️ using Vue & Tailwind CSS.</p>
    </footer>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import createGlobe from 'globe.gl';
import * as THREE from 'three';

// GitHub username
const githubUsername = 'Faraimunashe';

// Refs for GSAP animations
const heroTitle = ref(null);
const heroSubtitle = ref(null);
const ctaButton = ref(null);
const globeContainer = ref(null);


// GSAP animations on mount
onMounted(() => {
  // Staggered reveal animations for hero text
  gsap.timeline()
    .from(heroTitle.value, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
    .from(heroSubtitle.value, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    }, "-=0.5")
    .from(ctaButton.value, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    }, "-=0.5");
});

// Tech stack data
const techStack = [
  { name: 'Vue.js', icon: 'fab fa-vuejs text-green-500' },
  { name: 'Tailwind CSS', icon: 'fas fa-paint-brush text-teal-500' },
  { name: 'Laravel', icon: 'fab fa-laravel text-red-500' },
  { name: 'JavaScript', icon: 'fab fa-js text-yellow-400' },
  { name: 'Python', icon: 'fab fa-python text-yellow-400' },
  { name: 'Java', icon: 'fab fa-java text-orange-400' },
  { name: 'JavaFX', icon: 'fas fa-desktop text-purple-400' },
  { name: 'React Native', icon: 'fab fa-react text-blue-400' },
  { name: 'PHP', icon: 'fab fa-php text-indigo-400' },
  { name: 'Arduino', icon: 'fas fa-microchip text-green-400' },
  { name: 'Git', icon: 'fab fa-git-alt text-orange-500' },
];

// Experience data
const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Midlands State University',
    year: '2022 - Present',
    description: 'Developed and maintained internal applications, including the nativePOS system.',
  },
  {
    title: 'Software Developer Intern',
    company: 'Local Tech Startup',
    year: '2021',
    description: 'Worked on various web and mobile projects, including data visualization dashboards.',
  },
  {
    title: 'Freelance Projects',
    company: 'Self-employed',
    year: '2019 - 2021',
    description: 'Delivered high-quality web applications for small businesses and local clients.',
  },
];

// Projects data
const projects = [
  { id: 1, title: 'POS App', description: 'Modern POS system in Laravel & Vue.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6t8FKAufqoPAqZxoroM24sLhuakHS7b0PFA&s', link: '#' },
  { id: 2, title: 'Weather Dashboard', description: 'Real-time weather insights in Python.', image: 'https://media.istockphoto.com/id/1280154328/vector/infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs.jpg?s=612x612&w=0&k=20&c=PIYx1Ezd1syx2zZpw8ZhFnC-QpdGUqNwDdZV7ytXWjA=', link: '#' },
  { id: 3, title: 'E-Commerce Platform', description: 'Beautiful shopping experience.', image: 'data:image/jpeg;base64,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', link: '#' },
  { id: 4, title: 'Virtual Tour', description: 'Immersive virtual campus tour.', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/682b7a129559463.616dcdbaef840.jpg', link: '#' },
];


onMounted(() => {
  // GSAP text animations
  gsap.from(heroTitle.value, { y: -50, opacity: 0, duration: 1, ease: 'power2.out' });
  gsap.from(heroSubtitle.value, { y: 50, opacity: 0, duration: 1, delay: 0.3, ease: 'power2.out' });
  gsap.from(ctaButton.value, { scale: 0.8, opacity: 0, duration: 1, delay: 0.6, ease: 'back.out(1.7)' });

  // Initialize Globe
  const globe = createGlobe()(globeContainer.value)
    .globeImageUrl('/assets/earth-night.jpg')
    .backgroundColor('rgba(0,0,0,0)')
    .pointOfView({ lat: -19, lng: 30, altitude: 2 }) // approximate Zimbabwe
    .onGlobeReady(() => {
      // Animate to your location
      globe.pointOfView({ lat: -19, lng: 30, altitude: 0.9 }, 2000);
    });

  // Add marker
  globe
    .customLayerData([{ lat: -19, lng: 30 }])
    .customThreeObject(() => {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load('assets/marker.png'),
        color: 'red'
      }));
      sprite.scale.set(0.2, 0.2, 1);
      return sprite;
    })
    .customThreeObjectUpdate((obj, d) => {
      obj.position.copy(globe.getCoords(d.lat, d.lng));
    });
});

</script>
