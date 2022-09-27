import React from 'react';
import { Contents, ListItems } from '../conmponents';
const RoadmapSection = ({ phasesItems }) => {
  return (
    <div className="relative z-[1] bg-road-map bg-repeat-y text-white min-h-[4644px] pt-24 pb-screen before:content-[''] before:absolute before:left-0 before:top-0 before:bg-gradient-black-63 before:w-full before:h-1/2 before:z-[-1] after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-gradient-black-63 after:w-full after:h-1/2 after:rotate-180 after:z-[-1]">
      <div className="text-center">
        <h1>Roadmap</h1>
        <h2 className="text-theme-gray underline drop-shadow shadow-text">Season One</h2>
      </div>
      <div className="flex flex-col px-16 mt-60">
        {phasesItems.map((item, index) => {
          const modulasRes = index % 2;
          return (
            <div className={`mt-12 ${modulasRes !== 0 && 'ml-auto'} max-w-[895px]`} key={index}>
              <h2 className="text-6.5xl text-center">{item.title}</h2>
              <h3 className="mt-9 text-center">{item.subTitle}</h3>
              <div className="text-center">
                <img src={item.thumb} alt={item.title} className="inline-block" />
              </div>
              <div className="mt-9 px-8 pt-19 pb-14 rounded-[100px] bg-black-50 text-light-text">
                {item.contents.map((content, i) => <p key={`${item.title} -p- ${i}`} className="text-2xl text-light-text mb-10 leading-12">{content}</p>)}
                <div className="mt-6">
                  {item.options.map((option, i) => {
                    const { listItems, contents } = option;
                    return (
                      <>
                        <h3 className="mt-20 pb-3 max-w-[740px] text-center mx-auto border border-b-5 border-t-0 border-r-black border-l-black border-b-item-heading-border rounded-br-[100px]  rounded-bl-[100px]" key={option.title + '-heading-' + i}>{option.title}</h3>
                        {listItems && <ListItems key={option.title + '-item-' + i} items={listItems} ulClass="mt-10 list-disc p-[revert]" classes="text-2xl text-light-text leading-12" />}
                        {contents && <Contents key={option.title + '-content-' + i} items={contents} classes="text-2xl text-light-text leading-12" />}
                      </>
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