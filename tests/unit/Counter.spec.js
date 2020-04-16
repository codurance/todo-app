import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

test('renders the numbers of TODOs', () => {
    const todos = [
        { title: 'The Wire' },
        { title: 'Unorthodox' },
        { title: 'Brooklyn Nine-Nine' }
    ]

    const counter = shallowMount(Counter, {
        propsData: { todos }
    })
    
    expect(counter.text()).toMatch("Number of TODOs: 3")
})
