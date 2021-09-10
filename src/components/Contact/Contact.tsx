import { Button } from '../Button'
import { Section, SectionTitle } from '../Section'

import { contactData } from '../../data'
import { ContactModel } from '../../models'

export const Contact = () => {
  if (!contactData.email) return null

  return (
    <Section
      className='center'
      id='contact'
      style={{ flexDirection: 'column' }}
    >
      <SectionTitle>Contact</SectionTitle>
      <a href={`mailto:${contactData.email as ContactModel}`}>
        <Button buttonType='outline' type='button'>
          Email me
        </Button>
      </a>
    </Section>
  )
}

export default Contact
