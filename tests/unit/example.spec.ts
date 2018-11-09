import { shallowMount } from '@vue/test-utils';
import AppLogo from '@/components/AppLogo.vue';

describe('AppLogo.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(AppLogo, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
