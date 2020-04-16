import { mount } from '@vue/test-utils'
import App from '@/App.vue'

test('Adds a new TODO to the list and to the counter', async () => {
    const app = mount(App)

    const input = app.find('input')
    input.setValue('Breaking Bad')
    app.find('form').trigger('submit')
    await app.vm.$nextTick()

    expect(app.text()).toContain("Number of TODOs: 1")
    expect(app.find('li').text()).toBe('Breaking Bad')
})
