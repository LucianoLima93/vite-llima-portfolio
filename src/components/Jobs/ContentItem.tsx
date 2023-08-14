
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentItem: React.FC<IContentItem> = ({ job, index }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col">
        <span className="text-gray-50 mb-1">{t(`jobs.${index}.position`)}
          <span className="text-teal-300"> @
            <a href={job.link}
              target="_blank" rel="noopener noreferrer"
              className="text-teal-300 font-semibold hover:underline transition-all">{t(`jobs.${index}.company`)}</a>
          </span>
        </span>
        <span className="font-light text-sm text-gray-300 mb-6">{t(`jobs.${index}.period`)}</span>
        <ul role='list' className="list-disc marker:text-teal-300 mb-6">
          {job.description && job.description.map((desc, idxDesc) => (
            <React.Fragment key={idxDesc}>
              <li className="font-light text-base text-gray-300">{t(`jobs.${index}.${desc}.${idxDesc}`)}</li>
            </React.Fragment>
          ))}
        </ul>
        <div>
          <span className="font-light text-base text-gray-300 mb-3 block">{t('root.usedTechnologies')}</span>
          <ul role='list' className="flex gap-3 font-light text-sm w-fit gap-y-3">
            {job.technologies && job.technologies.map((tech, idxTech) => (
              <React.Fragment key={idxTech}>
                <li className="text-teal-300 border border-solid border-teal-300 px-2 py-1 rounded-3xl">
                  {t(`jobs.${index}.${tech}.${idxTech}`)}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ContentItem