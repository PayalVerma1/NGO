// This script populates the project detail page based on the selected project

const projectData = {
  food: {
    title: 'Food Donation',
    description: 'Our Food Donation project aims to provide nutritious meals to underprivileged communities. We organize regular drives and collaborate with local partners to ensure food reaches those in need.',
    leads: ['Amit Sharma', 'Priya Singh'],
    img: 'https://res.cloudinary.com/do3ahravh/image/upload/v1734693003/img5_xflz2o.avif'
  },
  plantation: {
    title: 'Plantation Drive',
    description: 'The Plantation Drive focuses on increasing green cover by planting trees in urban and rural areas. Volunteers and local residents join hands to make our environment cleaner and greener.',
    leads: ['Rohit Verma', 'Sneha Patel'],
    img: 'https://res.cloudinary.com/do3ahravh/image/upload/v1734693025/img6_lreqpv.avif'
  },
  cloth: {
    title: 'Cloth Donation',
    description: 'Through the Cloth Donation project, we collect gently used clothes and distribute them to families in need, especially during winters and emergencies.',
    leads: ['Karan Mehta', 'Anjali Rao'],
    img: 'https://res.cloudinary.com/do3ahravh/image/upload/v1734693052/img7_h2hqh3.avif'
  }
};

function getProjectKey() {
  // Try to get project key from query string
  const params = new URLSearchParams(window.location.search);
  if (params.has('project')) return params.get('project');
  // Fallback: try localStorage
  return localStorage.getItem('selectedProject');
}

function renderProjectDetail() {
  const key = getProjectKey();
  const data = projectData[key];
  if (!data) return;
  document.getElementById('projectTitle').textContent = data.title;
  document.getElementById('projectDescription').textContent = data.description;
  // Show project image
  const img = document.getElementById('projectImg');
  if (data.img) {
    img.src = data.img;
    img.style.display = 'block';
    img.alt = data.title;
  } else {
    img.style.display = 'none';
  }
  const leadList = document.getElementById('leadList');
  leadList.innerHTML = '';
  data.leads.forEach(lead => {
    const li = document.createElement('li');
    li.textContent = lead;
    leadList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderProjectDetail);
