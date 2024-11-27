import { searchRepository } from "@/server/repository";

class SearchServices {
  private static readonly repository = searchRepository;

  static searchTickets(userId: string, searchTerm: string) {
    return this.repository.searchTickets(userId, searchTerm);
  }
}

export { SearchServices };
