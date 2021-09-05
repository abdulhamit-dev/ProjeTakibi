export class GorevDto {
    id!:string;
    projeId!:string;
    projeAdi!:string;
    yapilacakIsAciklama!:string;
    yapilmaDurumu!:boolean;
    atananKullaniciId!:string;
    atananKullaniciAdi:String | undefined;
    atayanKullaniciId!:string;
    atayanKullaniciAdi!:string;
    islemTarihi!:string;
}
