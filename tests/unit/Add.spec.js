import { shallowMount } from '@vue/test-utils'
import Add from '@/components/Add.vue'

test('Emits an event with the new TODO', () => {
    const add = shallowMount(Add)

    const input = add.find('input')
    input.setValue('Breaking Bad')
    add.trigger('submit')

    const events = add.emitted('todoAdded')
    expect(events).toHaveLength(1)
    expect(events[0][0]).toMatchObject({ title: 'Breaking Bad' })
})
