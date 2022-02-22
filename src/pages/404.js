import Link from 'next/link';
import PageStyle from '../styles/components/missingPage.module.scss';

const Page404 = () => {
  return (
    <div className={PageStyle.notFoundPage}>
        <p className={PageStyle.notFoundPage__text}>
            <div className={PageStyle.notFoundPage__text__char}>
                4
            </div>
            <div className={PageStyle.notFoundPage__text__char}>
                0
            </div>
            <div className={PageStyle.notFoundPage__text__char}>
                4
            </div>
        </p>
        <p className={PageStyle.notFoundPage__bottomtext}>
            Oh no !... My Website... it&apos;s broken !
        </p>
        <Link href={`/`}>
            <a className={PageStyle.notFoundPage__btn}>
                Go Home Page
            </a>
        </Link>
    </div>
  )
}

export default Page404