
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContentItem: React.FC<IContentItem> = ({ job, index }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col">
        <span className="mb-1">{t(`jobs.${index}.position`)}
          <span className="dark:text-teal-300 text-teal-500"> @
            <a href={job.link}
              target="_blank" rel="noopener noreferrer"
              className="dark:text-teal-300 text-teal-500 font-semibold hover:underline transition-all">{t(`jobs.${index}.company`)}</a>
          </span>
        </span>
        <span className="text-sm dark:text-gray-300 text-gray-700 mb-6">{t(`jobs.${index}.period`)}</span>
        <ul role='list' className="list-disc dark:marker:text-teal-300 marker:text-teal-500 mb-6 mr-4">
          {job.description && job.description.map((desc, idxDesc) => (
            <React.Fragment key={idxDesc}>
              <li className="text-base">{t(`jobs.${index}.${desc}.${idxDesc}`)}</li>
            </React.Fragment>
          ))}
        </ul>
        <div>
          <span className="text-base dark:text-gray-300 text-gray-700 mb-3 block">{t('root.usedTechnologies')}</span>
          <ul role='list' className="flex gap-3 text-sm w-fit gap-y-3">
            {job.technologies && job.technologies.map((tech, idxTech) => (
              <React.Fragment key={idxTech}>
                <li className={`dark:text-teal-300 text-teal-500 border border-solid dark:border-teal-300
                  hover:text-gray-50 dark:hover:text-gray-950
                  border-teal-500 px-2 py-1 rounded-3xl hover:border-transparent hover:bg-teal-500 dark:hover:bg-teal-300`}>
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