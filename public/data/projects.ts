export type Project = {
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  link: string | null;
  repo: string | null;
  images: string[] | null;
};

const _projects: Project[] = [
  {
    title: 'NeoDrive',
    subtitle: 'Cloud Storage Platform',
    description: 'NeoDrive is a cloud storage platform similar to Google Drive that allows users to upload and store files securely. It features user authentication, file management, and a responsive design.',
    categories: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    link: "https://neodrive-production.up.railway.app/",
    repo: "https://github.com/Haris-199/file-uploader/",
    images: ['../../src/assets/NeoDrive.png'],
  },
  {
    title: 'NeoDrive',
    subtitle: 'Cloud Storage Platform',
    description: 'NeoDrive is a cloud storage platform that allows users to upload and store files securely. It features user authentication, file management, and a responsive design.',
    categories: ['JavaScript', 'Node.js', 'Express.js', 'PostgreSQL'],
    link: "https://neodrive-production.up.railway.app/",
    repo: null,
    images: ['../../src/assets/NeoDrive.png'],
  },
  {
    title: 'NeoDrive',
    subtitle: 'Cloud Storage Platform',
    description: 'NeoDrive is a cloud storage platform that allows users to upload and store files securely. It features user authentication, file management, and a responsive design.',
    categories: ['JavaScript'],
    link: "https://neodrive-production.up.railway.app/",
    repo: null,
    images: ['../../src/assets/NeoDrive.png'],
  },
  {
    title: 'NeoDrive',
    subtitle: 'Cloud Storage Platform',
    description: 'NeoDrive',
    categories: ['Node.js', 'Express.js', 'PostgreSQL'],
    link: "https://neodrive-production.up.railway.app/",
    repo: null,
    images: ['../../src/assets/NeoDrive.png'],
  },
];

export const projects: Project[] = JSON.parse(JSON.stringify(_projects));
