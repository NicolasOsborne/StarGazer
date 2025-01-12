<?php

namespace App\Controller;

use App\Repository\HygdataV3TrieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

class StarController extends AbstractController
{
    private $repository;

    public function __construct(HygdataV3TrieRepository $repository)
    {
        $this->repository = $repository;
    }

    #[Route('/api/stars/closest', name: 'closest_stars', methods: ['GET'])]
    public function getClosestStars(): JsonResponse
    {
        $stars = $this->repository->findClosestStars();

        return $this->json($stars);
    }

    #[Route('/api/stars/brightest', name: 'brightest_stars', methods: ['GET'])]
    public function getBrightestStars(): JsonResponse
    {
        $stars = $this->repository->findBrightestStars();

        return $this->json($stars);
    }

    #[Route('/api/stars/hottest', name: 'hottest_stars', methods: ['GET'])]
    public function getHottestStars(): JsonResponse
    {
        $stars = $this->repository->findHottestStars();

        return $this->json($stars);
    }

    #[Route('/api/stars/biggest', name: 'biggest_stars', methods: ['GET'])]
    public function getBiggestStars(): JsonResponse
    {
        $stars = $this->repository->findBiggestStars();

        return $this->json($stars);
    }

    #[Route('/api/constellations', name: 'constellations', methods: ['GET'])]
    public function getConstellations(HygdataV3TrieRepository $repository): JsonResponse
    {
        $constellations = $repository->findUniqueConstellations();

        return $this->json($constellations);
    }
}
