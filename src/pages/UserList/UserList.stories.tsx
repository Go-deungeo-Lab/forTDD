// src/pages/UserList/UserList.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { UserList } from './UserList'
import './UserList.css'  // 페이지 자체의 스타일만 import

const meta: Meta<typeof UserList> = {
    title: 'Pages/UserList',
    component: UserList,
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta
type Story = StoryObj<typeof UserList>

export const Default: Story = {}