import { SearchRepository } from "@/server/repository";

class SearchServices {
  static searchTickets(userId: string, searchTerm: string) {
    return SearchRepository.searchTickets(userId, searchTerm);
  }
}

export { SearchServices };
