import { useState } from 'react'
import { Appbar, Drawer } from 'react-native-paper'

export default function Name() {
  const [active, setActive] = useState('')

  return (
    <Drawer.Section className='w-[80%] bg-slate-500' title='Some title'>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title='Title' />
        <Appbar.Action icon='calendar' onPress={() => {}} />
        <Appbar.Action icon='magnify' onPress={() => {}} />
      </Appbar.Header>
      <Drawer.Item
        label='First Item'
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label='Second Item'
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  )
}
