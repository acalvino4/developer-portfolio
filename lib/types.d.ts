export type ProjectData = {
  type: string
  projectLink: string
  viewLink: string
  sourceLink: string
  heading: string
  subHeading: string
  synopsis: string
  technologies: string
  featured: boolean
}
export type PostData = {
  title: string
  date: string
  summary: string
}
export type MarkdownProps<T={[key: string]: any;}> = {
  id: string
  data: T,
  content?: string
};

export type Project = MarkdownProps<ProjectData>
export type ProjectProps = {
  project: Project
}
export type ProjectsProps = {
  projects: Project[]
}

export type Post = MarkdownProps<PostData>
export type PostProps = {
  post: Post
}
export type PostsProps = {
  posts: Post[]
}
