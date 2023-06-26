import { IconBrandTwitterFilled, IconDots, IconPlus } from '@tabler/icons-react'
import './App.css'
import Header from './components/header/Header'
import Tweet from './components/tweet/Tweet'

function App() {

  return (
    <>
      <Header></Header>
      <article className='py-2 sticky text-center text-blue-400 border-b top-0 bg-[#222] border-zinc-700 cursor-pointer hover:bg-zinc-800 select-none'>
        Mostrar 35 Tweets
      </article>
      <main className='flex flex-col' style={{ height: "200vh" }}>
        <Tweet>
          
        </Tweet>
        <article className='tw-tweet'>
          <span style={{ backgroundImage: "url(https://unavatar.io/twitter/miza1712)" }} className='tw-tweet-avatar rounded-full'></span>
          <section className='tw-tweet-content'>
            <header className="tw-tweet-content-header">
              <div className='tw-tweet-content-info'>
                <span className='tw-tweet-content-info-name'>
                  Miguel Zapata
                </span>
                <span className='tw-tweet-content-info-username'>
                  @miza1712
                </span>
                <span>
                  ·
                </span>
                <span className='tw-tweet-content-info-time'>
                  16h
                </span>
              </div>
              <button role='button' className='tw-tweet-content-options'>
                <div>
                  <IconDots className='w-5 h-5'></IconDots>
                </div>
              </button>
            </header>
            <p className="tw-tweet-content-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi harum, a repellendus animi, et aliquam, quibusdam odio culpa nostrum saepe est sed consequuntur ad sint! Totam, quae. Officiis, mollitia ab!
            </p>
            <div className='tw-tweet-content-image'>
              <img loading='lazy' src="https://source.unsplash.com/collection/190727/1500x1500" alt="" />
            </div>
          </section>
        </article>
      </main>
      <div className='h-20 w-full sticky bottom-0'>
        <button role='button' className='h-14 w-14 bg-blue-500 m-5 inline-flex justify-center items-center rounded-full absolute bottom-0 right-0 hover:bg-blue-400 cursor-pointer'>
          <IconPlus stroke={2} size={30}></IconPlus>
        </button>
      </div>

    </>
  )
}

export default App
