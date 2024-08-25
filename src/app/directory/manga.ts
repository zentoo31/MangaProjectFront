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
    mean:number;
    num_scoring_users:number;
    status:string;
    media_type: string;
    genres:{
      id:number,
      name:string
    }[];
    paging:{
      previus: string,
      next: string
    }
}
