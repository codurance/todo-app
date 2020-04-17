import { mount } from '@vue/test-utils'
import List from '@/components/List.vue'

test('renders all the TODOs items', () => {
    const todos = [
        { title: 'The Wire' },
        { title: 'Unorthodox' },
        { title: 'Brooklyn Nine-Nine' }
    ]

    const list = mount(List, {
        propsData: { todos }
    })

    const items = list.findAll('li')
    expect(items.at(0).text()).toMatch('The Wire')
    expect(items.at(1).text()).toMatch('Unorthodox')
    expect(items.at(2).text()).toMatch('Brooklyn Nine-Nine')
})
