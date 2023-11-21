export interface PaginationGroupProps {
  page: number
  totalPage: number
  paginateTo: (index: number) => void
}
