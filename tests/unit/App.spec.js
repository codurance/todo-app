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

test('Renders 2 items, the second one marked as done', async () => {
    function addItem(value) {
        input.setValue(value)
        app.find('form').trigger('submit')
    }

    const app = mount(App)
    const input = app.find('input')

    addItem('Breaking Bad')
    addItem('The Wire')
    //Update the view
    app.vm.$forceUpdate();
    await app.vm.$nextTick()
    //Mark the second item as done
    const secondItem = app.findAll('input[type="checkbox"]').at(1)
    secondItem.setChecked(true)
    await app.vm.$nextTick()

    expect(app.find('#todoapp')).toMatchSnapshot()
})
