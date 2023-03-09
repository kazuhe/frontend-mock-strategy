import { fireEvent, render, screen } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'

import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    render(HomeView, {
      global: {
        plugins: [pinia]
      }
    })
    setActivePinia(pinia)
  })

  it('「書籍一覧を取得する」ボタンを押下すると一覧が表示されること', async () => {
    expect(screen.queryByTestId('book-item')).toBeNull()
    const fetchBookListButton = await screen.findByTestId('fetch-book-list-button')
    await fireEvent.click(fetchBookListButton)
    await screen.findByText('isbn: 111-1-11-1111-1, name: Book01')
    await screen.findByText('isbn: 222-2-22-2222-2, name: Book02')
  })
})
