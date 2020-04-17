import { shallowMount } from '@vue/test-utils'
import Item from '@/components/Item.vue'

test('renders a done item', () => {
    const todo = { title: 'The Wire', done: true }

    const item = shallowMount(Item, {
        propsData: { todo }
    })

    expect(item.find('li').classes()).toEqual(['done'])
})

test('renders a pending item', () => {
    const todo = { title: 'The Wire' }

    const item = shallowMount(Item, {
        propsData: { todo }
    })

    expect(item.find('li').classes()).toEqual(['pending'])
})

test('mark an item as done', async () => {
    const todo = { title: 'The Wire' }

    const item = shallowMount(Item, {
        propsData: { todo }
    })
    item.find('input').setChecked(true)
    item.vm.$forceUpdate();
    await item.vm.$nextTick()

    expect(item.find('li').classes()).toEqual(['done'])
})

test('mark an item as pending', async () => {
    const todo = { title: 'The Wire', done: true }

    const item = shallowMount(Item, {
        propsData: { todo }
    })
    item.find('input').setChecked(false)
    item.vm.$forceUpdate();
    await item.vm.$nextTick()

    expect(item.find('li').classes()).toEqual(['pending'])
})