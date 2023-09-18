import { mount } from '@vue/test-utils'
import FooterIcon from '../Footer/FooterIcon.vue'

const id = 1
const icon = 'ph:sun'
const link = 'https://github.com/selemondev'

describe('FooterIcon', () => {
  it('Should render with the correct props', () => {
    const wrapper = mount(FooterIcon, {
      props: {
        id,
        icon,
        link,
      },
    })
    expect(wrapper.vm.icon).toMatch('ph:sun')
    expect(wrapper.vm.id).toBe(1)
    expect(wrapper.vm.link).toMatch('https://github.com/selemondev')
  })
})
