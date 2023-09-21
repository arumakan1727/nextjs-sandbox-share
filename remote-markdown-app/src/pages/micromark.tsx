import { useData } from '@/lib/useData'
import { micromark } from 'micromark'
import { math, mathHtml } from 'micromark-extension-math'

export default () => {
    const data = useData<{ statement: string }>('http://localhost:3001/api/sample')
    if (!data) {
      return <div>Loading...</div>
    }
    const rawHtml = micromark(data.statement, {
      extensions: [math()],
      htmlExtensions: [mathHtml()],
    })

  return (
    <>
      <h1>サンプル問題 - micromark の場合</h1>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
    </>
  )
}
