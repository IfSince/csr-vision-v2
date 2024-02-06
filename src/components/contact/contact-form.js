import { scrollRevealAnimation } from '../../animation.config.js'
import { m } from 'framer-motion'
import { Magnetic } from '../animations/magnetic.js'
import { Send } from '../../svg/icons/send.js'
import { Input } from './input.js'
import { TextArea } from './text-area.js'
import { Checkbox } from './checkbox.js'

export const ContactForm = () => {
  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted!'))
      .catch(error => console.log(error))
  }

  return (
    <form className="grid text-xl col-full-width md:grid-cols-1 xl:grid-cols-[repeat(2,minmax(0,1fr))_min-content] *:border-secondary/20"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={ handleSubmit }
    >
      <div className="border-t border-secondary/20 xl:border-r xl:border-b">
        <input type="hidden" name="form-name" value="contact"/>
        <Input placeholder="Email..." name="email"/>
        <Input placeholder="Name..." name="name"/>
        <Input placeholder="Unternehmen..." name="company"/>
        <TextArea placeholder="Deine Nachricht..." name="message"/>
      </div>

      <div className="*:border-secondary/20 border-t">
        <div className="border-b py-4 px-[min(3rem,var(--horizontal-spacing))] xl:border-r">Ich interessiere mich für...</div>
        <div className="flex flex-wrap">
          <Checkbox id="layout-nachhaltigkeits-pdf">Layout Nachhaltigkeits-PDF</Checkbox>
          <Checkbox id="web">Webauftritt</Checkbox>
          <Checkbox id="video-social-media">Videodreh (Social Media)</Checkbox>
          <Checkbox id="video-longform">Videodreh (Longform Content)</Checkbox>
          <Checkbox id="social-media-posts">Social Media Beiträge</Checkbox>
          <Checkbox id="foto-shootings">Fotoshootings</Checkbox>
          <Checkbox id="copy-report">Copywriting (Bericht)</Checkbox>
          <Checkbox id="copy-blog">Copywriting (Blog)</Checkbox>
          <Checkbox id="seo-consulting">SEO Beratung</Checkbox>
          <Checkbox id="ai-content-creation">AI Content Creation</Checkbox>
        </div>
      </div>


      <div className="p-[var(--horizontal-spacing)] flex xl:items-end justify-end border-b xl:border-t">
        <Magnetic multiplier={ 35 } className="text-heading-1">
          {
            position =>
              <m.button
                className="flex items-center justify-center rounded-full border transition-colors duration-300 p-[0.35em] h-[1em] w-[1em] border-secondary/20 group hover:border-secondary/80"
                { ...scrollRevealAnimation(0.5) }
                type="submit">
                <m.div style={ position }
                       className="h-full w-full transition-colors duration-300 fill-secondary group-focus-visible:fill-secondary group-hover:fill-secondary dark:fill-secondary/80">
                  <Send/>
                </m.div>
              </m.button>
          }
        </Magnetic>
      </div>
    </form>
  )
}