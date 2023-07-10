interface PostParams {
  id: string;
}
interface PostProps {
  params: PostParams;
}
export default function Post({ params }: PostProps) {
  const { id } = params;
  return (
    <main>
      <h1>Esto es el post {id}</h1>
    </main>
  );
}
