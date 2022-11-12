import React from "react";

import LazyLoad from "react-lazyload";

import Styles from "../main.module.scss";
import LazyPlaceholder from "../../../widgets/lazy-placeholder";
import workCaseData from "../../../../config/work/case-data";

export default function ProjectCase(props: { project: string }) {
  const { projectOverview, projectOverview2, challenge, challengeSVG, solution } = workCaseData[props.project]
  return (
    <>
      <section className={Styles.caseStudy}>
        <div className={Styles.caseStart}>
          <h3>Project Overview</h3>
          <p>{projectOverview} </p>
          <p>{projectOverview2} </p>
          <h3>The Challenge</h3>
          <div className={Styles.challengeSVG}>{challengeSVG}</div>
          <p>{challenge}</p>
          <h3>The Solution</h3>
        </div>
        {solution ? solution.svg : null}
        {solution
          ? solution.data.map((section) => (
              <section key={`${section?.title} ${section?.mainTitle}`} className={section.greyBG ? Styles.greyBackground : undefined}>
                {section.mainTitle ? <h3>{section.mainTitle}</h3> : <h4>{section.title}</h4>}
                {section.para
                  ? section.para.map((para) => <p key={para}>{para}</p>)
                  : null}
                {section.svg ? section.svg : null}
                {section.imageLink
                  ? section.imageLink.map((image) => (
                      <React.Fragment key={image.src}>
                        <LazyLoad height={200} once placeholder={<LazyPlaceholder />}>
                          <img src={image.src} alt={image.src} width='100%' />
                        </LazyLoad>
                        <figcaption>{image.caption}</figcaption>
                        {image.pdfLink ? (
                          <a rel='noreferrer' target='_blank' href={image.pdfLink}>
                            Download PDF
                            <svg className={Styles.pdfIcon} xmlns='http://www.w3.org/2000/svg' width='13.125' height='16' viewBox='0 0 13.125 16'>
                              <path
                                id='Icon_metro-file-pdf'
                                data-name='Icon metro-file-pdf'
                                d='M15.115,5.6a2.091,2.091,0,0,1,.41.679,2.139,2.139,0,0,1,.171.786V17.346a.846.846,0,0,1-.239.607.774.774,0,0,1-.581.25H3.391a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.061a.846.846,0,0,1,.239-.607.774.774,0,0,1,.581-.25h7.657a1.9,1.9,0,0,1,.752.179,1.98,1.98,0,0,1,.649.429ZM11.321,3.418V6.775h3.213a.989.989,0,0,0-.188-.366L11.671,3.614a.922.922,0,0,0-.35-.2ZM14.6,17.06V7.918H11.048a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.346H3.665V17.06H14.6ZM10.21,11.766a6.49,6.49,0,0,0,.718.5,8.12,8.12,0,0,1,1-.062q1.256,0,1.513.437a.448.448,0,0,1,.017.464.026.026,0,0,1-.009.018l-.017.018v.009q-.051.339-.607.339a3.388,3.388,0,0,1-.983-.179,6.082,6.082,0,0,1-1.111-.473,14.819,14.819,0,0,0-3.35.741q-1.307,2.339-2.068,2.339a.48.48,0,0,1-.239-.062l-.205-.107q-.009-.009-.051-.045a.382.382,0,0,1-.051-.321,1.958,1.958,0,0,1,.479-.817A4.146,4.146,0,0,1,6.373,13.7q.12-.08.2.054a.052.052,0,0,1,.017.036q.444-.759.914-1.759A13.994,13.994,0,0,0,8.39,9.694,7.506,7.506,0,0,1,8.129,8.27a3.624,3.624,0,0,1,.056-1.138q.094-.357.359-.357h.188a.354.354,0,0,1,.3.134.74.74,0,0,1,.077.607.2.2,0,0,1-.034.071.242.242,0,0,1,.009.071v.268a12.205,12.205,0,0,1-.12,1.714,4.549,4.549,0,0,0,1.248,2.125Zm-4.922,3.67a3.888,3.888,0,0,0,1.171-1.411,4.974,4.974,0,0,0-.748.75A2.982,2.982,0,0,0,5.288,15.435Zm3.4-8.214A2.771,2.771,0,0,0,8.672,8.4q.009-.062.06-.393,0-.027.06-.384a.2.2,0,0,1,.034-.071.026.026,0,0,1-.009-.018.019.019,0,0,0,0-.013.019.019,0,0,1,0-.013A.528.528,0,0,0,8.7,7.186a.026.026,0,0,1-.009.018v.018Zm-1.06,5.9a12.123,12.123,0,0,1,2.427-.723,1.292,1.292,0,0,1-.111-.085,1.55,1.55,0,0,1-.137-.121,4.727,4.727,0,0,1-1.085-1.571,12.231,12.231,0,0,1-.709,1.759q-.256.5-.385.741Zm5.52-.143q-.205-.214-1.2-.214a3.115,3.115,0,0,0,1.06.25.794.794,0,0,0,.154-.009q0-.009-.017-.027Z'
                                transform='translate(-2.571 -2.204)'
                                fill='#fed200'
                              />
                            </svg>
                          </a>
                        ) : null}
                      </React.Fragment>
                    ))
                  : null}
                {section.caption ? <figcaption>{section.caption}</figcaption> : null}
                {section.iFrame ? <iframe title={section.iFrame.src} style={{ width: "100%", height: "35rem", border: "none" }} src={section.iFrame.src} loading='lazy' /> : null}
                {section.list
                  ? section.list.map((list) => (
                      <React.Fragment key={section.list?.indexOf(list)}>
                        <span className={Styles.listHead}>{list.heading}</span>
                        {list.type === "ol" ? (
                          <ol>
                            {list.items.map((item) => <li key={item}>{item}</li>)}
                          </ol>
                        ) : (
                          <ul>
                            {list.items.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        )}
                      </React.Fragment>
                    ))
                  : null}
                {section.subSection
                  ? section.subSection.map((subSection) => (
                      <React.Fragment key={subSection.title}>
                        <h5>{subSection.title}</h5>

                        {subSection.para
                          ? subSection.para.map((para) => <p key={para}>{para}</p>)
                          : null}
                        {subSection.img
                          ? subSection.img.map((img) => (
                              <React.Fragment key={img.src}>
                                <LazyLoad once height={200}>
                                  <img style={{ marginBottom: "1.5rem" }} src={img.src} key={img.src} width='100%' alt={img.caption ? img.caption : img.src} />
                                </LazyLoad>

                                <figcaption>{img.caption}</figcaption>
                                {img.pdfLink ? (
                                  <a rel='noreferrer' target='_blank' href={img.pdfLink}>
                                    Download PDF
                                    <svg className={Styles.pdfIcon} xmlns='http://www.w3.org/2000/svg' width='13.125' height='16' viewBox='0 0 13.125 16'>
                                      <path
                                        id='Icon_metro-file-pdf'
                                        data-name='Icon metro-file-pdf'
                                        d='M15.115,5.6a2.091,2.091,0,0,1,.41.679,2.139,2.139,0,0,1,.171.786V17.346a.846.846,0,0,1-.239.607.774.774,0,0,1-.581.25H3.391a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.061a.846.846,0,0,1,.239-.607.774.774,0,0,1,.581-.25h7.657a1.9,1.9,0,0,1,.752.179,1.98,1.98,0,0,1,.649.429ZM11.321,3.418V6.775h3.213a.989.989,0,0,0-.188-.366L11.671,3.614a.922.922,0,0,0-.35-.2ZM14.6,17.06V7.918H11.048a.774.774,0,0,1-.581-.25.846.846,0,0,1-.239-.607V3.346H3.665V17.06H14.6ZM10.21,11.766a6.49,6.49,0,0,0,.718.5,8.12,8.12,0,0,1,1-.062q1.256,0,1.513.437a.448.448,0,0,1,.017.464.026.026,0,0,1-.009.018l-.017.018v.009q-.051.339-.607.339a3.388,3.388,0,0,1-.983-.179,6.082,6.082,0,0,1-1.111-.473,14.819,14.819,0,0,0-3.35.741q-1.307,2.339-2.068,2.339a.48.48,0,0,1-.239-.062l-.205-.107q-.009-.009-.051-.045a.382.382,0,0,1-.051-.321,1.958,1.958,0,0,1,.479-.817A4.146,4.146,0,0,1,6.373,13.7q.12-.08.2.054a.052.052,0,0,1,.017.036q.444-.759.914-1.759A13.994,13.994,0,0,0,8.39,9.694,7.506,7.506,0,0,1,8.129,8.27a3.624,3.624,0,0,1,.056-1.138q.094-.357.359-.357h.188a.354.354,0,0,1,.3.134.74.74,0,0,1,.077.607.2.2,0,0,1-.034.071.242.242,0,0,1,.009.071v.268a12.205,12.205,0,0,1-.12,1.714,4.549,4.549,0,0,0,1.248,2.125Zm-4.922,3.67a3.888,3.888,0,0,0,1.171-1.411,4.974,4.974,0,0,0-.748.75A2.982,2.982,0,0,0,5.288,15.435Zm3.4-8.214A2.771,2.771,0,0,0,8.672,8.4q.009-.062.06-.393,0-.027.06-.384a.2.2,0,0,1,.034-.071.026.026,0,0,1-.009-.018.019.019,0,0,0,0-.013.019.019,0,0,1,0-.013A.528.528,0,0,0,8.7,7.186a.026.026,0,0,1-.009.018v.018Zm-1.06,5.9a12.123,12.123,0,0,1,2.427-.723,1.292,1.292,0,0,1-.111-.085,1.55,1.55,0,0,1-.137-.121,4.727,4.727,0,0,1-1.085-1.571,12.231,12.231,0,0,1-.709,1.759q-.256.5-.385.741Zm5.52-.143q-.205-.214-1.2-.214a3.115,3.115,0,0,0,1.06.25.794.794,0,0,0,.154-.009q0-.009-.017-.027Z'
                                        transform='translate(-2.571 -2.204)'
                                        fill='#fed200'
                                      />
                                    </svg>
                                  </a>
                                ) : null}
                              </React.Fragment>
                            ))
                          : null}
                      </React.Fragment>
                    ))
                  : null}
              </section>
            ))
          : null}
      </section>
    </>
  );
}
