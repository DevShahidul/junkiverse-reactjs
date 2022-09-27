import React from 'react';
import { Contents, ListItems } from '../conmponents';
const RoadmapSection = ({ phasesItems }) => {
  return (
    <div className="relative z-[1] bg-road-map bg-repeat-y text-white pt-24 pb-40 md:pb-80 xl:pb-screen before:content-[''] before:absolute before:left-0 before:top-0 before:bg-gradient-black-63 before:w-full before:h-1/2 before:z-[-1] after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-black-63 after:w-full after:h-1/2 after:rotate-180 after:z-[-1]">
      <div className="text-center">
        <h1 className="text-6xl xl:text-8xl">Roadmap</h1>
        <h2 className="text-theme-gray underline drop-shadow shadow-text text-4xl xl:text-5xl">Season One</h2>
      </div>
      <div className="flex flex-col px-6 md:px-16 md:mt-5 lg:mt-30 2xl:mt-60">
        {phasesItems.map((item, index) => {
          const modulasRes = index % 2;
          return (
            <div className={`mt-12 ${modulasRes !== 0 ? 'ml-auto' : 'ml-auto xl:ml-0'} mr-auto xl:mr-0 w-full max-w-[895px]`} key={item.title + '-' + index}>
              <h2 className="text-5xl xl:text-6.5xl text-center">{item.title}</h2>
              <h3 className="mt-5 xl:mt-9 text-center text-3xl xl:text-4xl">{item.subTitle}</h3>
              <div className="text-center">
                <img src={item.thumb} alt={item.title} className="inline-block" />
              </div>
              <div className="mt-9 px-8 pt-19 pb-14 rounded-[100px] bg-black-50 text-light-text">
                {item.contents.map((content, i) => <p key={`${item.title} -p- ${i}`} className="text-2xl text-light-text mb-10 leading-12">{content}</p>)}
                <div className="mt-6">
                  {item.options.map((option, i) => {
                    const { listItems, contents } = option;
                    return (
                      <div key={option.title + '-heading-' + i}>
                        <h3 className="mt-20 pb-3 text-3xl xl:text-4xl max-w-[740px] text-center mx-auto border border-b-5 border-t-0 md:border-r-black md:border-l-black border-b-item-heading-border md:rounded-br-[100px]  md:rounded-bl-[100px] md:px-12">{option.title}</h3>
                        {listItems && <ListItems items={listItems} ulClass="mt-10 list-disc p-[revert]" classes="text-2xl text-light-text leading-12" />}
                        {contents && <Contents items={contents} classes="text-2xl text-light-text leading-12" />}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default RoadmapSection;