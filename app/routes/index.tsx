import { useLoaderData } from "@remix-run/react";
export const loader = async ( ) => {
  return Promise.resolve({
    data : [
      {
        imageUrl: 'https://drive.google.com/file/d/15SHFyTDpVDrTyUP98YIgAUEf05485b7j/view?usp=sharing',
        audioUrl: 'https://drive.google.com/file/d/1MTYiTBq-79i1MJG9dtOPZ9gQqgzVSoo-/view?usp=sharing'
      },
    ]
  })
}
export default function Index() {
  const { data } = useLoaderData();
  console.log(data);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
