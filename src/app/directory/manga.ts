export interface Manga {
    id: number;
    title: string;
    main_picture: {
      medium: string;
      large: string;
    };
    rank: number;
    synopsis: string;
    start_date: string;
    end_date: string;
}
