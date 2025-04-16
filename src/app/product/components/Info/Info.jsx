'use client';

import st from './Info.module.scss';

export default function Info({ files, isVideoCategory }) {
  return (
    <section className={st.layout}>
      <h3 className={st.heading}>Additional information</h3>
      <section className={st.blocks}>
        <div>
          <h4 className={st.subheading}>Type of delivery</h4>
          <span>Digital Download</span>
        </div>
        <div>
          <h4 className={st.subheading}>What is included:</h4>
          {files.length > 0 && (
            <div className={st.list}>
              {files?.map((file, index) => (
                <span key={index}>
                  {isVideoCategory ? file.file.alt : file.filename}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
}
