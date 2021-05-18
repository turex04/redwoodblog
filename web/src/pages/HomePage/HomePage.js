import { Link, routes } from '@redwoodjs/router'

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Redwood Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

// export default HomePage
