import type { JSX } from 'react'
import type { TuonoRouteProps } from 'tuono'

interface IndexProps {
  subtitle: string
}

export default function IndexPage({
  data,
  isLoading,
}: TuonoRouteProps<IndexProps>): JSX.Element {
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <header className="header">
        <a href="https://crates.io/crates/tuono" target="_blank">
          Crates
        </a>
        <a href="https://www.npmjs.com/package/tuono" target="_blank">
          Npm
        </a>
      </header>
      <div className="title-wrap">
        <h1 className="title">
          TU<span>O</span>NO
        </h1>
        <div className="logo">
          <img src="rust.svg" className="rust" />
          <img src="react.svg" className="react" />
        </div>
      </div>
      <div className="subtitle-wrap">
        <p className="subtitle">{data?.subtitle}</p>
        <a
          href="https://github.com/tuono-labs/tuono"
          target="_blank"
          className="button"
          type="button"
        >
          Github
        </a>
      </div>
      <form action="/api/get_data" method='POST'>
        <input name='name'/>
        <input name='file' type='file'/>
        <button type='submit'>Odeslat</button>
      </form>
    </>
  )
}
