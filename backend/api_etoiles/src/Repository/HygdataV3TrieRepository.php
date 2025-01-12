<?php

namespace App\Repository;

use App\Entity\HygdataV3Trie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<HygdataV3Trie>
 */
class HygdataV3TrieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HygdataV3Trie::class);
    }

    public function findClosestStars($limit = 50): array
    {
        return $this->createQueryBuilder('h')
            ->select('h.id', 'h.proper', 'h.hip', 'h.hd', 'h.hr', 'h.gl', 'h.bf', 'h.mag', 'h.dist', 'h.con')
            ->orderBy('h.dist', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }

    public function findBrightestStars($limit = 50): array
    {
        return $this->createQueryBuilder('h')
            ->select('h.proper', 'h.hip', 'h.hd', 'h.hr', 'h.gl', 'h.bf', 'h.mag', 'h.dist', 'h.con')
            ->orderBy('h.mag', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }

    public function findHottestStars($limit = 50): array
    {
        return $this->createQueryBuilder('h')
            ->select('h.proper', 'h.hip', 'h.hd', 'h.hr', 'h.gl', 'h.bf', 'h.mag', 'h.dist', 'h.con')
            ->orderBy('h.ci', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }

    public function findBiggestStars($limit = 50): array
    {
        return $this->createQueryBuilder('h')
            ->select('h.proper', 'h.hip', 'h.hd', 'h.hr', 'h.gl', 'h.bf', 'h.mag', 'h.dist', 'h.con')
            ->orderBy('h.lum', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }

    public function findUniqueConstellations(): array
    {
        return $this->createQueryBuilder('h')
            ->select('DISTINCT h.con')
            ->getQuery()
            ->getArrayResult();
    }
}
