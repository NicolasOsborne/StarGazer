<?php

namespace App\Entity;

use App\Repository\HygdataV3TrieRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HygdataV3TrieRepository::class)]
class HygdataV3Trie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $hip = null;

    #[ORM\Column(nullable: true)]
    private ?int $hd = null;

    #[ORM\Column(nullable: true)]
    private ?int $hr = null;

    #[ORM\Column(length: 9, nullable: true)]
    private ?string $gl = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $bf = null;

    #[ORM\Column(length: 20)]
    private ?string $proper = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 8, scale: 6, nullable: true)]
    private ?string $ra = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 9, scale: 6, nullable: true)]
    private ?string $dec = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 7, scale: 4, nullable: true)]
    private ?string $dist = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 7, scale: 2, nullable: true)]
    private ?string $pmra = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 7, scale: 2, nullable: true)]
    private ?string $pmdec = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 1, nullable: true)]
    private ?string $rv = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 4, scale: 2, nullable: true)]
    private ?string $mag = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 3, nullable: true)]
    private ?string $absmag = null;

    #[ORM\Column(length: 12, nullable: true)]
    private ?string $spect = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 3, nullable: true)]
    private ?string $ci = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 6, nullable: true)]
    private ?string $x = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 6, nullable: true)]
    private ?string $y = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 6, nullable: true)]
    private ?string $z = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 9, scale: 7, nullable: true)]
    private ?string $vx = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 9, scale: 7, nullable: true)]
    private ?string $vy = null;

    #[ORM\Column(length: 20, nullable: true)]
    private ?string $rarad = null;

    #[ORM\Column(length: 22, nullable: true)]
    private ?string $decrad = null;

    #[ORM\Column(length: 22, nullable: true)]
    private ?string $pmrarad = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 15, scale: 13, nullable: true)]
    private ?string $pmdecrad = null;

    #[ORM\Column(length: 5, nullable: true)]
    private ?string $bayer = null;

    #[ORM\Column(nullable: true)]
    private ?int $flam = null;

    #[ORM\Column(length: 3, nullable: true)]
    private ?string $con = null;

    #[ORM\Column(nullable: true)]
    private ?int $comp = null;

    #[ORM\Column(nullable: true)]
    private ?int $comp_primary = null;

    #[ORM\Column(length: 8)]
    private ?string $base = null;

    #[ORM\Column(length: 19, nullable: true)]
    private ?string $lum = null;

    #[ORM\Column(length: 5, nullable: true)]
    private ?string $var = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 3, nullable: true)]
    private ?string $var_min = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getHip(): ?int
    {
        return $this->hip;
    }

    public function setHip(?int $hip): static
    {
        $this->hip = $hip;

        return $this;
    }

    public function getHd(): ?int
    {
        return $this->hd;
    }

    public function setHd(?int $hd): static
    {
        $this->hd = $hd;

        return $this;
    }

    public function getHr(): ?int
    {
        return $this->hr;
    }

    public function setHr(?int $hr): static
    {
        $this->hr = $hr;

        return $this;
    }

    public function getGl(): ?string
    {
        return $this->gl;
    }

    public function setGl(?string $gl): static
    {
        $this->gl = $gl;

        return $this;
    }

    public function getBf(): ?string
    {
        return $this->bf;
    }

    public function setBf(?string $bf): static
    {
        $this->bf = $bf;

        return $this;
    }

    public function getProper(): ?string
    {
        return $this->proper;
    }

    public function setProper(string $proper): static
    {
        $this->proper = $proper;

        return $this;
    }

    public function getRa(): ?string
    {
        return $this->ra;
    }

    public function setRa(?string $ra): static
    {
        $this->ra = $ra;

        return $this;
    }

    public function getDec(): ?string
    {
        return $this->dec;
    }

    public function setDec(?string $dec): static
    {
        $this->dec = $dec;

        return $this;
    }

    public function getDist(): ?string
    {
        return $this->dist;
    }

    public function setDist(?string $dist): static
    {
        $this->dist = $dist;

        return $this;
    }

    public function getPmra(): ?string
    {
        return $this->pmra;
    }

    public function setPmra(?string $pmra): static
    {
        $this->pmra = $pmra;

        return $this;
    }

    public function getPmdec(): ?string
    {
        return $this->pmdec;
    }

    public function setPmdec(?string $pmdec): static
    {
        $this->pmdec = $pmdec;

        return $this;
    }

    public function getRv(): ?string
    {
        return $this->rv;
    }

    public function setRv(?string $rv): static
    {
        $this->rv = $rv;

        return $this;
    }

    public function getMag(): ?string
    {
        return $this->mag;
    }

    public function setMag(?string $mag): static
    {
        $this->mag = $mag;

        return $this;
    }

    public function getAbsmag(): ?string
    {
        return $this->absmag;
    }

    public function setAbsmag(?string $absmag): static
    {
        $this->absmag = $absmag;

        return $this;
    }

    public function getSpect(): ?string
    {
        return $this->spect;
    }

    public function setSpect(?string $spect): static
    {
        $this->spect = $spect;

        return $this;
    }

    public function getCi(): ?string
    {
        return $this->ci;
    }

    public function setCi(?string $ci): static
    {
        $this->ci = $ci;

        return $this;
    }

    public function getX(): ?string
    {
        return $this->x;
    }

    public function setX(?string $x): static
    {
        $this->x = $x;

        return $this;
    }

    public function getY(): ?string
    {
        return $this->y;
    }

    public function setY(?string $y): static
    {
        $this->y = $y;

        return $this;
    }

    public function getZ(): ?string
    {
        return $this->z;
    }

    public function setZ(?string $z): static
    {
        $this->z = $z;

        return $this;
    }

    public function getVx(): ?string
    {
        return $this->vx;
    }

    public function setVx(?string $vx): static
    {
        $this->vx = $vx;

        return $this;
    }

    public function getVy(): ?string
    {
        return $this->vy;
    }

    public function setVy(?string $vy): static
    {
        $this->vy = $vy;

        return $this;
    }

    public function getRarad(): ?string
    {
        return $this->rarad;
    }

    public function setRarad(?string $rarad): static
    {
        $this->rarad = $rarad;

        return $this;
    }

    public function getDecrad(): ?string
    {
        return $this->decrad;
    }

    public function setDecrad(?string $decrad): static
    {
        $this->decrad = $decrad;

        return $this;
    }

    public function getPmrarad(): ?string
    {
        return $this->pmrarad;
    }

    public function setPmrarad(?string $pmrarad): static
    {
        $this->pmrarad = $pmrarad;

        return $this;
    }

    public function getPmdecrad(): ?string
    {
        return $this->pmdecrad;
    }

    public function setPmdecrad(?string $pmdecrad): static
    {
        $this->pmdecrad = $pmdecrad;

        return $this;
    }

    public function getBayer(): ?string
    {
        return $this->bayer;
    }

    public function setBayer(?string $bayer): static
    {
        $this->bayer = $bayer;

        return $this;
    }

    public function getFlam(): ?int
    {
        return $this->flam;
    }

    public function setFlam(?int $flam): static
    {
        $this->flam = $flam;

        return $this;
    }

    public function getCon(): ?string
    {
        return $this->con;
    }

    public function setCon(?string $con): static
    {
        $this->con = $con;

        return $this;
    }

    public function getComp(): ?int
    {
        return $this->comp;
    }

    public function setComp(?int $comp): static
    {
        $this->comp = $comp;

        return $this;
    }

    public function getCompPrimary(): ?int
    {
        return $this->comp_primary;
    }

    public function setCompPrimary(?int $comp_primary): static
    {
        $this->comp_primary = $comp_primary;

        return $this;
    }

    public function getBase(): ?string
    {
        return $this->base;
    }

    public function setBase(string $base): static
    {
        $this->base = $base;

        return $this;
    }

    public function getLum(): ?string
    {
        return $this->lum;
    }

    public function setLum(?string $lum): static
    {
        $this->lum = $lum;

        return $this;
    }

    public function getVar(): ?string
    {
        return $this->var;
    }

    public function setVar(?string $var): static
    {
        $this->var = $var;

        return $this;
    }

    public function getVarMin(): ?string
    {
        return $this->var_min;
    }

    public function setVarMin(?string $var_min): static
    {
        $this->var_min = $var_min;

        return $this;
    }
}
