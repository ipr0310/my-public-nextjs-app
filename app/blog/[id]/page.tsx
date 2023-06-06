export default function Page({ params: { id } }: { params: { id: string } }) {
  return <h1>Blog: {id}</h1>;
}
