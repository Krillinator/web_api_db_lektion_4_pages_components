import { Suspense } from "react"
import Loading from "./loading"

export default function Product() {
  // Wait 2 seconds
  function fetchData() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
  }

  // TODO - Fallback for loading (Hydration Error)
  return (
    <div>
      <p>This is the /product endpoint</p>
      <Suspense fallback={<Loading />}>
        <div>
          {fetchData().then(() => (
            <p>Data loaded after 2 seconds</p>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
