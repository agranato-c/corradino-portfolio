import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      className = "relative overflow-hidden min-h-screen"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`
          
        `}
      >
        <div className = "absolute h-full w-full -z-50" >
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage
              field={slice.primary.background}
              className="object-cover"
              alt="" priority fill
            />
          )}
        </div>

        <div className="es-fullpage-hero__content-right">
          <div className="es-fullpage-hero__content__intro">
            {isFilled.richText(slice.primary.title) && (
              <div className="es-fullpage-hero__content__intro__headline">
                <PrismicRichText field={slice.primary.title} />
              </div>
            )}

            <Bounded
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
              className="my-6 rounded-lg border-2 border-dashed bg-gray-100 p-2 dark:border-gray-200 dark:bg-muted max-w-150 space-y-8 text-left border-color: rgb(2, 80, 150)">
            
                {isFilled.keyText(slice.primary.tagline) && (
                  <p className="es-fullpage-hero__content__intro__eyebrow">
                    {slice.primary.tagline}
                  </p>
                )}

                {isFilled.richText(slice.primary.description) && (
                  <div className="es-fullpage-hero__content__intro__description text-gray-900">
                    <PrismicRichText field={slice.primary.description} />
                  </div>
                )}
            </Bounded>

            {isFilled.image(slice.primary.image) && (
              <img alt="es-fullpage-hero__image" className="inline-flex es-fullpage-hero__image--custom-width " src={slice.primary.image.url ?? "#"} />
            )}

            <ButtonLink
              className="es-call-to-action__link relative z-50"
              field={slice.primary.callToActionLink1}
            />
            <ButtonLink
              className="es-call-to-action__link relative z-50"
              field={slice.primary.callToActionLink2}
            />
          </div>
        </div>
      </div>
      <style>
        {`
          .es-bounded {
              margin: 0px;
              min-width: 0px;
              position: relative;
          }

          .es-fullpage-hero {
              font-family: system-ui, sans-serif;
              background-color: #fff;
              color: #333;
          }

          .es-fullpage-hero__image {
              max-width: 100%;
              height: auto;
              align-self: center;
          }

          .es-fullpage-hero__image--left > div:first-child {
              order: 1;
          }

          .es-fullpage-hero__image--left > div:nth-child(2) {
              order: 2;
          }

          .es-fullpage-hero__image--right > div:first-child {
              order: 2;
          }

          .es-fullpage-hero__image--right > div:nth-child(2) {
              order: 1;
          }

          .es-fullpage-hero__image--custom-width {
              width: 500px;
          }

          .es-fullpage-hero__content {
              display: flex;
              flex-direction: column;
              gap: 2rem;
          }

          .es-fullpage-hero__content-right {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              padding: 1.5rem;
          }

          @media (min-width: 1080px) {
              .es-fullpage-hero__content {
                  flex-direction: row;
              }

              .es-fullpage-hero__content > div {
                  width: 50%;
              }
          }

          .es-fullpage-hero__content__intro {
              display: grid;
              gap: 1rem;
          }

          .es-fullpage-hero__content__intro__eyebrow {
              color: #47C1AF;
              font-size: 1.15rem;
              font-weight: 500;
              margin: 0;
          }

          .es-fullpage-hero__content__intro__headline {
              font-size: 1.625rem;
              font-weight: 700;
          }

          .es-fullpage-hero__content__intro__headline * {
              margin: 0;
          }

          @media (min-width: 640px) {
              .es-fullpage-hero__content__intro__headline {
                  font-size: 2rem;
              }
          }

          @media (min-width: 1024px) {
              .es-fullpage-hero__content__intro__headline {
                  font-size: 2.5rem;
              }
          }

          @media (min-width: 1200px) {
              .es-fullpage-hero__content__intro__headline {
                  font-size: 2.75rem;
              }
          }

          .es-fullpage-hero__content__intro__description {
              font-size: 1.15rem;
              max-width: 38rem;
          }

          .es-fullpage-hero__content__intro__description > p {
              margin: 0;
          }

          @media (min-width: 1200px) {
              .es-fullpage-hero__content__intro__description {
                  font-size: 1.4rem;
              }
          }

          .es-call-to-action__link {
              justify-self: flex-start;
              border-radius: 0.25rem;
              font-size: 0.875rem;
              line-height: 1.3;
              padding: 1rem 2.625rem;
              transition: background-color 100ms linear;
              background-color: #16745f;
              color: #fff;
          }

          .es-call-to-action__link:hover {
              background-color: #0d5e4c;
          }
      `}
      </style>
    </Bounded>
  );
};

export default Hero;
